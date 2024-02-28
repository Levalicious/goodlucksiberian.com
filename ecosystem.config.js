module.exports = {
    apps: [
      {
        name: "Remix",
        script: "remix dev",
        ignore_watch: ["."],
        env: {
          PORT: "8080",
        },
      },
      {
        name: "TailwindCSS",
        script: "tailwindcss -o ./app/tailwind.css --watch",
        ignore_watch: ["."],
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };