module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      config.resolve.fallback = {fs : false}



      return config
    }
  }