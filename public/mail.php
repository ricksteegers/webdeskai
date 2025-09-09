<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'company', 'phone', 'message'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Missing required fields: ' . implode(', ', $missing_fields)
    ]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(trim($input['name']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$company = htmlspecialchars(trim($input['company']));
$phone = htmlspecialchars(trim($input['phone']));
$service = isset($input['service']) ? htmlspecialchars(trim($input['service'])) : 'Niet gespecificeerd';
$message = htmlspecialchars(trim($input['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Email configuration
$to = 'hallo@webdeskai.nl';
$subject = 'Nieuwe contactaanvraag van ' . $name . ' - WebDesk AI';

// Create HTML email body
$html_body = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #F4C430, #ff8c00); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #F4C430; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🚀 Nieuwe Contactaanvraag - WebDesk AI</h2>
            <p>Er is een nieuwe contactaanvraag binnengekomen via de website.</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">👤 Naam:</div>
                <div class="value">' . $name . '</div>
            </div>
            
            <div class="field">
                <div class="label">📧 E-mail:</div>
                <div class="value"><a href="mailto:' . $email . '">' . $email . '</a></div>
            </div>
            
            <div class="field">
                <div class="label">🏢 Bedrijf:</div>
                <div class="value">' . $company . '</div>
            </div>
            
            <div class="field">
                <div class="label">📱 Telefoon:</div>
                <div class="value"><a href="tel:' . $phone . '">' . $phone . '</a></div>
            </div>
            
            <div class="field">
                <div class="label">⚡ Gewenste Service:</div>
                <div class="value">' . $service . '</div>
            </div>
            
            <div class="field">
                <div class="label">💬 Bericht:</div>
                <div class="value">' . nl2br($message) . '</div>
            </div>
            
            <div class="field">
                <div class="label">🕒 Ontvangen op:</div>
                <div class="value">' . date('d-m-Y H:i:s') . '</div>
            </div>
        </div>
        <div class="footer">
            <p>Dit bericht is verzonden via het contactformulier op webdeskai.nl</p>
            <p>WebDesk AI - AI-Gedreven Websites voor Onverslaanbare Prijzen</p>
        </div>
    </div>
</body>
</html>';

// Create plain text version
$text_body = "Nieuwe contactaanvraag - WebDesk AI\n\n";
$text_body .= "Naam: " . $name . "\n";
$text_body .= "E-mail: " . $email . "\n";
$text_body .= "Bedrijf: " . $company . "\n";
$text_body .= "Telefoon: " . $phone . "\n";
$text_body .= "Gewenste Service: " . $service . "\n";
$text_body .= "Bericht:\n" . $message . "\n\n";
$text_body .= "Ontvangen op: " . date('d-m-Y H:i:s') . "\n";
$text_body .= "\nDit bericht is verzonden via het contactformulier op webdeskai.nl";

// Email headers
$headers = array(
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: WebDesk AI Contact Form <noreply@webdeskai.nl>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
    'X-Priority: 1',
    'Importance: High'
);

// Send email
$mail_sent = mail($to, $subject, $html_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Send auto-reply to customer
    $auto_reply_subject = 'Bedankt voor je bericht - WebDesk AI';
    $auto_reply_body = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F4C430, #ff8c00); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .highlight { background: #F4C430; color: black; padding: 2px 6px; border-radius: 4px; font-weight: bold; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>🎉 Bedankt voor je bericht!</h2>
                <p>We hebben je contactaanvraag ontvangen</p>
            </div>
            <div class="content">
                <p>Hallo ' . $name . ',</p>
                
                <p>Bedankt voor je interesse in WebDesk AI! We hebben je bericht ontvangen en zullen <span class="highlight">binnen 24 uur</span> contact met je opnemen.</p>
                
                <p><strong>Wat je kunt verwachten:</strong></p>
                <ul>
                    <li>📞 Een persoonlijk gesprek over je project</li>
                    <li>💡 Gratis advies en strategische inzichten</li>
                    <li>📊 Een op maat gemaakte offerte</li>
                    <li>⚡ Snelle oplevering binnen 1 week</li>
                </ul>
                
                <p><strong>Je contactgegevens:</strong></p>
                <ul>
                    <li>Bedrijf: ' . $company . '</li>
                    <li>E-mail: ' . $email . '</li>
                    <li>Telefoon: ' . $phone . '</li>
                    <li>Service: ' . $service . '</li>
                </ul>
                
                <p>Heb je nog vragen? Bel ons direct op <a href="tel:+31645830810">+31 6 45830810</a> of start een WhatsApp chat.</p>
                
                <p>Met vriendelijke groet,<br>
                <strong>Het WebDesk AI Team</strong></p>
            </div>
            <div class="footer">
                <p>WebDesk AI - AI-Gedreven Websites voor Onverslaanbare Prijzen</p>
                <p>📧 hallo@webdeskai.nl | 📱 +31 6 45830810</p>
            </div>
        </div>
    </body>
    </html>';
    
    $auto_reply_headers = array(
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: WebDesk AI <hallo@webdeskai.nl>',
        'X-Mailer: PHP/' . phpversion()
    );
    
    mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));
    
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Bericht succesvol verzonden! We nemen binnen 24 uur contact op.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of neem direct contact op.'
    ]);
}
?>