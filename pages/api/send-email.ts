import { createSendEmailCommand } from '@/utils/sendEmail'
import { SESClient } from '@aws-sdk/client-ses'
import type { NextApiRequest, NextApiResponse } from 'next'

const sesClient = new SESClient({
    region: 'eu-west-1',
    apiVersion: '2010-12-01',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
        sessionToken: process.env.AWS_SESSION_TOKEN || '',
    },
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== 'POST') {
        return res.status(405).send({
            error: 'Method Not Allowed',
        })
    }

    const sendEmailCommand = createSendEmailCommand(
        req.body.toAddress,
        req.body.body
    )

    try {
        await sesClient.send(sendEmailCommand)
        res.status(200).json({ sent: 'ok' })
    } catch (e) {
        console.error('Failed to send email.', e)
        
        return res.status(400).send({
            error: 'Could not send the email',
        })
    }
}
