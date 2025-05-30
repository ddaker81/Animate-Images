// pinokio.js
module.exports = {
  title: "Thin-Plate Spline Motion Model",
  description: "Animate a static image with a driving video using Thin-Plate Spline Motion Model.",
  icon: "icon.png", // Ensure you have an icon.png in the same directory, or remove this line
  menu: async (kernel) => {
    let installed = await kernel.exists("app", "thin-plate-spline-motion-model") // Check if the app is installed
    if (installed) {
      return [
        {
          icon: "play.png", // Placeholder, you might want a custom icon
          text: "Start Animation",
          href: "run.js"
        },
        {
          icon: "folder.png", // Placeholder, you might want a custom icon
          text: "Open App Folder",
          href: "file://./Thin-Plate-Spline-Motion-Model"
        },
        {
          icon: "reset.png", // Placeholder, you might want a custom icon
          text: "Reset (Reinstall)",
          href: "install.js?reset=true"
        }
      ]
    } else {
      return [
        {
          icon: "download.png", // Placeholder, you might want a custom icon
          text: "Install",
          href: "install.js"
        }
      ]
    }
  }
}