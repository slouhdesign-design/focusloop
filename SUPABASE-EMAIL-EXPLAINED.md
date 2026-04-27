# 📧 Supabase Email Configuration - Explained

## Understanding Supabase Emails

There are **2 different types of emails** in your setup:

---

## 1. YOUR Supabase Account Email (Owner)

**This is YOU** - the developer/owner of the Supabase project.

### How to Check:
1. Go to: https://supabase.com/dashboard
2. Click your profile icon (top right)
3. You'll see **your email** that you used to sign up for Supabase

**This email**:
- ✅ Owns the Supabase project
- ✅ Can access the dashboard
- ✅ Can manage database, auth, settings
- ❌ Does NOT appear in the app
- ❌ Is NOT used for website sign-ins

---

## 2. User Emails (Your Website Visitors)

**These are your USERS** - people who sign up on focusloop.app

### How It Works:
1. User visits: https://focusloop.app/auth
2. User enters THEIR OWN email (e.g., user@example.com)
3. User creates account
4. Their email is stored in Supabase `auth.users` table
5. They can sign in with their email

**User emails**:
- ✅ Stored in Supabase database
- ✅ Used for signing in to focusloop
- ✅ Each user has their own account
- ✅ Can reset their password
- ❌ Cannot access Supabase dashboard (only app)

---

## 🔍 What You're Asking About

### Question: "Which email Supabase it is?"

**Answer**: Your Supabase project is **already set up** with YOUR account.

To see which email you used:
1. Visit: https://supabase.com/dashboard
2. Look at top-right corner
3. That's YOUR email (the project owner)

### Question: "I need my data use my email"

**Answer**: Your data (sessions, stats) is tied to YOUR USER ACCOUNT, not your Supabase owner account.

**Here's how to test with YOUR email:**

#### Option 1: Create a Test Account (Recommended)
1. Visit: http://localhost:8080/auth
2. Click "Sign up"
3. Enter YOUR personal email (e.g., youremail@gmail.com)
4. Create password
5. Sign up
6. ✅ Now you have a user account with YOUR email!

#### Option 2: Sign In with Google OAuth
1. Visit: http://localhost:8080/auth
2. Click "Continue with Google"
3. Choose YOUR Google account
4. ✅ You're signed in with your Google email!

---

## 📊 Where Your Data Lives

### In Supabase Dashboard:
Go to: https://supabase.com/dashboard/project/vkdtxiywzocnojraaofb/auth/users

You'll see:
- **Authentication → Users**: All users who signed up
- Each user has their own email address
- You can see who signed up and when

### Your Personal Data:
Once you create an account on the app:
1. Your email is stored in `auth.users`
2. Your profile is created in `profiles` table
3. Your sessions are saved in `focus_sessions` table
4. All tied to YOUR user_id (UUID)

---

## 🎯 Quick Setup Guide

### Step 1: Check Your Supabase Owner Email
```
1. Go to: https://supabase.com/dashboard
2. Look at profile icon (top-right)
3. That's your owner email
```

### Step 2: Create Your Personal User Account
```
1. Open: http://localhost:8080/auth
2. Enter YOUR email: _________________
3. Create password
4. Sign up
5. ✅ Now you have a user account!
```

### Step 3: Use the App
```
1. Sign in with your email
2. Go to: http://localhost:8080/timer
3. Complete a focus session
4. Check: http://localhost:8080/stats
5. See YOUR data!
```

### Step 4: View Your Data in Supabase
```
1. Go to: https://supabase.com/dashboard/project/vkdtxiywzocnojraaofb/auth/users
2. Find your email in the users list
3. Click on it to see your user_id
4. Go to Table Editor → focus_sessions
5. Filter by your user_id
6. See all YOUR sessions!
```

---

## 🔐 Email Configuration Status

### ✅ Already Configured:

#### Supabase Auth Emails (Automatic)
- **Sign-up confirmation**: ✅ Enabled
- **Password reset**: ✅ Enabled  
- **Email verification**: ✅ Enabled (optional)
- **Magic link**: ✅ Enabled

**From Address**: `noreply@mail.app.supabase.co`

#### Email Provider Settings:
Your Supabase project sends emails for:
- ✅ Account confirmation
- ✅ Password reset links
- ✅ Magic link sign-in
- ✅ Email change confirmation

### ⚙️ To Customize (Optional):

#### Use Your Own Email Domain
Instead of `noreply@mail.app.supabase.co`, you can use your branded email:

1. **Go to Supabase Dashboard**:
   https://supabase.com/dashboard/project/vkdtxiywzocnojraaofb/auth/templates

2. **Set up custom SMTP** (Optional):
   - Settings → Authentication → SMTP Settings
   - Add your email provider credentials
   - Emails will come from: `noreply@focusloop.app`

3. **Customize Email Templates**:
   - Edit sign-up confirmation email
   - Edit password reset email
   - Add your branding/logo

---

## 📧 Email Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    YOUR SUPABASE PROJECT                 │
│            vkdtxiywzocnojraaofb.supabase.co             │
│                                                          │
│  Owner: your-email@gmail.com (YOU - Dashboard access)   │
└─────────────────────────────────────────────────────────┘
                            │
                            │ Manages
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   AUTH.USERS TABLE                       │
│                                                          │
│  User 1: alice@example.com                              │
│  User 2: bob@gmail.com                                  │
│  User 3: YOUR-EMAIL@gmail.com  ← Your personal account  │
│  User 4: charlie@yahoo.com                              │
│                                                          │
│  Each user has:                                         │
│  - Unique user_id (UUID)                                │
│  - Email address                                        │
│  - Password (encrypted)                                 │
│  - OAuth provider (optional)                            │
└─────────────────────────────────────────────────────────┘
                            │
                            │ Each user owns
                            ▼
┌─────────────────────────────────────────────────────────┐
│              FOCUS_SESSIONS TABLE                        │
│                                                          │
│  Session 1: user_id = alice's UUID                      │
│  Session 2: user_id = YOUR UUID  ← Your sessions        │
│  Session 3: user_id = bob's UUID                        │
│  Session 4: user_id = YOUR UUID  ← Your sessions        │
│                                                          │
│  RLS Policy: Users can only see their own sessions      │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ What You Need to Do

### Immediate Action:
1. **Create your user account** on the app with YOUR email
2. **Sign in** to the app (not Supabase dashboard)
3. **Use the timer** to create sessions
4. **View YOUR stats** on the stats page

### Your Email Options:
- Use any email you want (personal, work, etc.)
- Or use Google OAuth (sign in with Google)
- Or create multiple test accounts with different emails

---

## 🆘 Common Confusion - Clarified

### ❌ Wrong Understanding:
"I need to configure MY email in Supabase for the app to work"

### ✅ Correct Understanding:
"Supabase is already configured. I just need to create a USER ACCOUNT on the app using MY email, then I can use the app and see MY data."

---

## 🎯 Summary

| What | Where | Purpose |
|------|-------|---------|
| **Your Supabase owner email** | Supabase dashboard | Manage the project |
| **Your user account email** | focusloop app | Use the timer, see stats |
| **Other users' emails** | focusloop app | Their own accounts |

**Key Point**: 
- Your Supabase owner email ≠ Your app user email
- You can use ANY email to sign up on the app
- Each person who uses focusloop will have their own email/account

---

## 📝 Next Steps

1. ✅ Confirm which email you used for Supabase account (check dashboard)
2. ✅ Create a user account on the app with YOUR preferred email
3. ✅ Start using the timer with your account
4. ✅ View your personal stats

**Need help?** Just ask:
- "How do I reset my user password?"
- "How do I see all users in Supabase?"
- "How do I customize auth emails?"
- "How do I delete a test account?"

---

**Last Updated**: April 26, 2026  
**Your Supabase Project**: vkdtxiywzocnojraaofb
