// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.Resend_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//     const { body } = await req.json();
//     const { email, subject, message } = body;
//     try {
//         const data = await resend.emails.send({
//             from: fromEmail,
//             to: [fromEmail, email],
//             subject: subject,
//             react: (
//                 <>
//                     <p>
//                         <h1>{subject}</h1>
//                         <p>Thank you for contacting me!</p>
//                         <p>New Message submitted:</p>
//                         {message}
//                     </p>
//                 </>
//             ),
//         });
//         return NextResponse.json(data);

//     } catch (error) {
//         return NextResponse.json({ error });
//     }
// }


import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.Resend_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
    try {
        const body = await req.json(); // Correctly call json() function
        const { email, subject, message } = body;
        
        // Ensure body and email are defined
        if (!body || !email || !subject || !message) {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }
        
        // Send the email using the Resend API
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email,toEmail],
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting me!</p>
                    <p>New Message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
