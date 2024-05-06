import { ENV_CONFIG_KEYS_LIST } from "../envConfig";

export const WebpackHelper = {
  getFallbackFrom({ require }: any) {
    return {
      // assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      // console: require.resolve("console-browserify"),
      // constants: require.resolve("constants-browserify"),
      // crypto: require.resolve("crypto-browserify"),
      // domain: require.resolve("domain-browser"),
      events: require.resolve("events/"),
      // http: require.resolve("stream-http"),
      // https: require.resolve("https-browserify"),
      // os: require.resolve("os-browserify/browser"),
      // path: require.resolve("path-browserify"),
      // punycode: require.resolve("punycode/"),
      // process: require.resolve("process/browser"),
      // querystring: require.resolve("querystring-es3"),
      stream: require.resolve("stream-browserify"),
      // _stream_duplex: require.resolve("readable-stream/duplex"),
      // _stream_passthrough: require.resolve("readable-stream/passthrough"),
      // _stream_readable: require.resolve("readable-stream/readable"),
      // _stream_transform: require.resolve("readable-stream/transform"),
      // _stream_writable: require.resolve("readable-stream/writable"),
      // string_decoder: require.resolve("string_decoder/"),
      // sys: require.resolve("util/"),
      // timers: require.resolve("timers-browserify"),
      // tty: require.resolve("tty-browserify"),
      // url: require.resolve("url/"),
      // util: require.resolve("util/"),
      // vm: require.resolve("vm-browserify"),
      // zlib: require.resolve("browserify-zlib"),
      "process/browser": require.resolve("process/browser"),
    };
  },
  getPluginsFrom({ webpack }: any) {
    return [
      new webpack.EnvironmentPlugin(ENV_CONFIG_KEYS_LIST),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ];
  },
};
