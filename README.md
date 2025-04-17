# 🎥 Anime Streaming Platform

Welcome to the Anime Streaming Platform — a modern web application to browse and stream your favorite anime shows. Built with **Next.js App Router**, styled with **Tailwind CSS**, animated with **Framer Motion**, and powered by **Supabase** as the backend.

---

## 🚀 Features

- 🧠 Dynamic routes for each anime
- 📺 Stream anime content
- 🔐 Authentication with NextAuth (Google, GitHub)
- 💬 Comment system (optional)
- 🌙 Dark mode support
- ⚡ Smooth UI with Framer Motion

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase](https://supabase.com/)
- [NextAuth.js (Auth.js)](https://authjs.dev/)
- [Prisma](https://www.prisma.io/) *(optional)*

---

## 📁 Folder Structure

```
/app             # Next.js App Router pages
/components      # Reusable UI components
/utils           # Supabase client and other helpers
/public          # Static assets (e.g. logos, audio)
```

---

## ✅ Requirements

Before running this project, make sure you have the following installed:

- **Node.js** `>= 18`
- **npm** `>= 9`

---

## ⚙️ Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/anime-streaming.git
   cd anime-streaming
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   > 🛑 You need to provide a valid `.env` file with your Supabase credentials and Auth providers.
   >
   > 👉 Please send me your `.env` file or let me help you create it.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🗂️ Environment Variables (.env)

Here’s an example of what you might need (you’ll fill in the values):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

AUTH_GITHUB_ID=your_github_id
AUTH_GITHUB_SECRET=your_github_secret

AUTH_GOOGLE_ID=your_google_id
AUTH_GOOGLE_SECRET=your_google_secret

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

Let me know if you'd like help generating or securing these.

---

## 🧪 Future Features

- 🎧 Audio theme selector
- 📱 PWA support
- 🧩 Admin dashboard for managing anime
- 🧠 AI-based recommendations (optional)
- 📦 Offline viewing (experimental)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## 📜 License

MIT License. Feel free to fork and build your own universe of anime! 🌌
