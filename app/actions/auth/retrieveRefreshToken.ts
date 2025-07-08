'use server';

import { cookies } from "next/headers";

import React from 'react'

export default async function retrieveRefreshToken() {
    const cookieStore = await cookies();


  return cookieStore.get ('refresh_token')?.value
}
