module.exports = async (kernel) => {
  const repoPath = kernel.path.resolve("./Thin-Plate-Spline-Motion-Model")
  const scriptPath = kernel.path.resolve(repoPath, "demo.py")

  // Check if installed
  if (!(await kernel.exists(repoPath))) {
    kernel.log("Please run installation first")
    return
  }

  return {
    daemon: false,
    run: [{
      method: "shell.run",
      params: {
        message: [
          "python", scriptPath,
          "--config", "config/vox-256.yaml",
          "--driving_video", kernel.input,
          "--source_image", kernel.params.source,
          "--checkpoint", "checkpoints/vox.pth.tar",
          "--result_video", kernel.output,
          "--relative",
          "--adapt_scale"
        ].join(" "),
        path: repoPath,
        env: {
          PYTHONPATH: repoPath
        }
      }
    }]
  }
}
