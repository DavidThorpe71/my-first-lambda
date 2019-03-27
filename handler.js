"use strict";

const axios = require("axios");
require("dotenv").config();

module.exports.daveyFirst = async event => {
  const url = `https://trefle.io/api/plants?token=${process.env.TREFLEKEY}&q=${
    event.queryStringParameters.name
  }`;

  const result = await axios.get(url);
  const text = result.data.map(item => item.common_name).filter(x => x);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: text
    })
  };
};
