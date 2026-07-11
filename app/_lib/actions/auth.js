'use server';

import { createClient } from '../supabase/server';

// Returns { error: string } on failure, { success: true } on success.
// Callers stay on the page and read the result — no redirect() here so the
// client component can show inline errors instead of a hard navigation.

export async function signUpAction({ fullName, email, phone, password }) {
  if (!fullName || !email || !password) {
    return { error: 'Please fill in your name, email, and password.' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, phone: phone || null },
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signInAction({ email, password }) {
  if (!email || !password) {
    return { error: 'Please enter your email and password.' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return { success: true };
}

export async function getCurrentUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
