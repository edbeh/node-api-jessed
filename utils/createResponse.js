module.exports = createResponse = (status, message, body) => {
  return {
    status,
    message,
    body,
  }
}
