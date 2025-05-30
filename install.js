module.exports = async (kernel) => {
  return {
    daemon: false,
    run: [{
      method: "shell.run",
      params: {
        message: "git clone https://github.com/yoyo-nb/Thin-Plate-Spline-Motion-Model.git",
        path: "."
      }
    }, {
      method: "shell.run",
      params: {
        message: "python -m venv venv",
        path: "./Thin-Plate-Spline-Motion-Model"
      }
    }, {
      method: "shell.run",
      params: {
        message: process.platform === 'win32' ? "venv\\Scripts\\activate" : "source venv/bin/activate",
        path: "./Thin-Plate-Spline-Motion-Model"
      }
    }, {
      method: "shell.run",
      params: {
        message: "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118",
        path: "./Thin-Plate-Spline-Motion-Model"
      }
    }, {
      method: "shell.run",
      params: {
        message: "pip install -r requirements.txt",
        path: "./Thin-Plate-Spline-Motion-Model"
      }
    }, {
      method: "fs.download",
      params: {
        uri: "https://cloud.tsinghua.edu.cn/f/da8d61d012014b12a9e4/?dl=1",
        dest: "./Thin-Plate-Spline-Motion-Model/checkpoints/vox.pth.tar"
      }
    }, {
      method: "notify",
      params: {
        html: "Installation completed successfully!"
      }
    }]
  }
}
