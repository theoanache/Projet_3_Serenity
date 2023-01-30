const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "animation-delay": (value) => {
        return {
          animationDelay: value,
        };
      },
    },
    {
      values: theme("animationDelay"),
    }
  );
});

module.exports = animationDelay;
