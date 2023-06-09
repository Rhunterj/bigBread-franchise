import { SendEmailCommand } from "@aws-sdk/client-ses"

const createSendEmailCommand = (body: string) => {
  return new SendEmailCommand({
       Destination: {
           ToAddresses: ["info@bigbread.nl"],
       },
       Message: {
           Body: {
               Html: {
                   Charset: 'UTF-8',
                   Data: body,
               },
               Text: {
                   Charset: 'UTF-8',
                   Data: body,
               },
           },
           Subject: {
               Charset: 'UTF-8',
               Data: 'BigBread franchise enquiry',
           },
       },
       Source: "info@franchisebijbbkitchen.nl",
   })
}

export { createSendEmailCommand }