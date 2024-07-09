// app/api/vapi/findCar/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

async function findCar({ location, checkInDate, checkInTime, carType }: { location: string; checkInDate: string; checkInTime: string; carType: string }) {
  // Construct the URL
  console.log(location, checkInDate, checkInTime, carType)
  const searchUrl = `https://vapiblocks-carhive.vercel.app/?location=${encodeURIComponent(location)}&carType=${encodeURIComponent(carType)}`;
  return { url: searchUrl };
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    console.log(message);
    if (message.type === 'function-call' && message.functionCall) {
      const { parameters } = message.functionCall;
      
      const result = await findCar(parameters);
      const jsonResponse = NextResponse.json({ result: "The URL was created successfully.", response: result }, { status: 200 });
      jsonResponse.headers.set('Access-Control-Allow-Origin', '*');
      jsonResponse.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
      jsonResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return jsonResponse;
    } else {
      const jsonResponse = NextResponse.json({ message: `Unhandled message type: ${message.type}` }, { status: 400 });
      jsonResponse.headers.set('Access-Control-Allow-Origin', '*');
      jsonResponse.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
      jsonResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return jsonResponse;
    }
  } catch (error) {
    console.error('Error processing request:', error);
    const jsonResponse = NextResponse.json({ message: error }, { status: 500 });
    jsonResponse.headers.set('Access-Control-Allow-Origin', '*');
    jsonResponse.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    jsonResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return jsonResponse;
  }
}

export async function OPTIONS() {
  const response = NextResponse.json({}, { status: 200 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}
