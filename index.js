const obj2gltf = require("obj2gltf");
const path = require("path");
const fs = require("fs");

obj2gltf(path.join(__dirname, "models", "HDM_06_002.obj")).then(gltf => {
    const data = Buffer.from(JSON.stringify(gltf));
    fs.writeFileSync("model.gltf", data);
});
