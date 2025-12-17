# MyTube - Modern YouTube Clone

A stunning, fully functional YouTube clone application built with **React**, **Vite**, and **Material UI**. This project leverages the [RapidAPI YouTube v3 API](https://rapidapi.com/ytdl-org/api/youtube-v31) to fetch real-time video data, channels, and search results.

## 🚀 Features

- **Modern UI/UX**: Designed with Material UI, featuring a clean, responsive layout identical to YouTube.
- **Light & Dark Mode**: Seamless toggle between light and dark themes with persistent state.
- **Video Playback**: Watch videos directly within the app using `react-player`.
- **Channel Pages**: View channel details, subscriber counts, and their video feed.
- **Search Functionality**: Robust search with instant results.
- **Category Filtering**: Browse videos by categories (Music, Coding, Gaming, etc.) with a pill-shaped navigation bar.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 (via Vite)
- **UI Library**: Material UI (MUI) v6
- **Icons**: MUI Icons
- **State Management**: React Context API & Hooks
- **Routing**: React Router DOM v6
- **API Fetching**: Axios
- **API Provider**: RapidAPI (YouTube v3)

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/prannav225/MyTube.git
   cd MyTube
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your RapidAPI key:
   ```env
   VITE_RAPID_API_KEY=your_rapid_api_key_here
   ```
   > You can get a free API key from [RapidAPI YouTube v3](https://rapidapi.com/ytdl-org/api/youtube-v31).

4. **Run the development server**
   ```bash
   npm start
   ```
   The app will run at `http://localhost:5173`.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Add the `VITE_RAPID_API_KEY` in the Vercel Environment Variables settings.
4. Deploy!

## 🤝 Credits

- API provided by [RapidAPI](https://rapidapi.com/).
- Design inspiration from YouTube.
