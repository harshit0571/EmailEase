import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const SES_CONFIG = {
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
      region: process.env.AWS_SES_REGION,
    };
    const sesClient = new SESClient(SES_CONFIG);

    const sendMail = async (recipient, name) => {
      let params = {
        Source: "harshitchadha65@gmail.com",
        Destination: {
          ToAddresses: ["harshitchadha65@gmail.com"],
        },
        ReplyToAddresses: [],
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: "<h1>This is body</h1>",
            },
            Text: {
              Charset: "UTF-8",
              Data: "This is body",
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "This is subject",
          },
        },
      };

      try {
        console.log(params);
        const SendEmailCommands = new SendEmailCommand(params);
        const res = await sesClient.send(SendEmailCommands);
        console.log("email has been sent", res);
      } catch (error) {
        console.log("error recieved", error);
      }
    };

    sendMail();
    return NextResponse.json({ message: "hello", success: true });
  } catch (error) {
    consolelog(error);
    return NextResponse.json({ message: "hello", success: false });
  }
};

export const GET = () => {
  return NextResponse.json({ message: "hello", success: true });
};
