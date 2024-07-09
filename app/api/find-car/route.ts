// app/api/vapi/findCar/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { location, checkInDate, checkInTime, carType } = await request.json();

  if (!location || !checkInDate || !checkInTime || !carType) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Construct the URL or perform the logic needed to find the car
    const searchUrl = `https://vapiblocks-carhive.vercel.app/findCar?location=${encodeURIComponent(location)}&checkInDate=${encodeURIComponent(checkInDate)}&checkInTime=${encodeURIComponent(checkInTime)}&carType=${encodeURIComponent(carType)}`;

    // Respond with the constructed URL
    return NextResponse.json({ message: 'URL created successfully', url: searchUrl });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error: JSON.stringify(error, null, 2) }, { status: 500 });
  }
}
