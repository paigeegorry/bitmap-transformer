class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUInt16BE(10);
    this.bitsPerPixel = buffer.readUInt16BE(28);
    this.fileSize = buffer.readUInt16BE(2);

  }

}

module.exports = BitmapHeader;
