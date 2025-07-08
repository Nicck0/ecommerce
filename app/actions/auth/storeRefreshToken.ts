'use server';

import { cookies } from "next/headers";

import React from 'react'

export default async function storeRefreshToken(token: string) {
    const cookieStore = await cookies();


  return cookieStore.set ('refresh_token', token);
}
