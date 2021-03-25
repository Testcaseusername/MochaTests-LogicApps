var expect    = require("chai").expect;
const handler = require ('./poster')

describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex   = handler.rgbToHex(255, 0, 0);
      var greenHex = handler.rgbToHex(0, 255, 0);
      var blueHex  = handler.rgbToHex(0, 0, 255);

      expect(redHex).to.equal(true);
      expect(greenHex).to.equal(true);
      expect(blueHex).to.equal(true);
    });
  });

  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
      var red   = handler.hexToRgb("ff0000");
      var green = handler.hexToRgb("00ff00");
      var blue  = handler.hexToRgb("0000ff");

      expect(red).to.deep.equal(true);
      expect(green).to.deep.equal(true);
      expect(blue).to.deep.equal(true);
    });
  });
});