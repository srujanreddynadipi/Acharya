import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to the owner
    const ownerEmail = 'dptiearis46@gmail.com'
    const ownerName = 'Acharya Durgesh Tiwari'

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ownerEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f59e0b; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
          </div>
          
          <div style="background-color: #fffbeb; padding: 30px; border: 1px solid #fde68a;">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Details:</h2>
            
            <div style="margin: 20px 0; padding: 15px; background-color: white; border-left: 4px solid #f59e0b; border-radius: 4px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background-color: white; border-left: 4px solid #f59e0b; border-radius: 4px;">
              <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; color: #4b5563;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #fde68a; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This is an automated message from your website contact form.</p>
            </div>
          </div>
        </div>
      `,
    })

    // Optional: Send confirmation email to the user
    try {
      await resend.emails.send({
        from: 'Acharya Durgesh Tiwari <onboarding@resend.dev>',
        to: email,
        subject: 'We received your message',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #f59e0b; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; text-align: center;">Thank you for reaching out</h1>
            </div>
            
            <div style="background-color: #fffbeb; padding: 30px; border: 1px solid #fde68a;">
              <p style="color: #1f2937; font-size: 16px;">Dear ${name},</p>
              
              <p style="color: #4b5563; line-height: 1.6;">
                Thank you for contacting Acharya Durgesh Tiwari. We have received your message and will get back to you as soon as possible.
              </p>
              
              <p style="color: #4b5563; line-height: 1.6;">
                For urgent inquiries, you can also reach us directly:
              </p>
              
              <div style="margin: 20px 0; padding: 15px; background-color: white; border-left: 4px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 8px 0;"><strong>Phone:</strong> +91 7013272777</p>
                <p style="margin: 8px 0;"><strong>WhatsApp:</strong> <a href="https://wa.me/917013272777" style="color: #f59e0b; text-decoration: none;">Chat with us</a></p>
              </div>
              
              <p style="color: #4b5563; margin-top: 20px;">
                Warm regards,<br/>
                <strong>Acharya Durgesh Tiwari</strong><br/>
                <span style="color: #f59e0b; font-size: 14px;">Vedic Scholar | Spiritual Consultant</span>
              </p>
            </div>
          </div>
        `,
      })
    } catch (error) {
      // If user email fails, still return success since owner got the message
      console.log('User confirmation email failed:', error)
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
