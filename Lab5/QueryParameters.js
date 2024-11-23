export default function QueryParameters(app) {
  app.get("/lab5/calculator", (req, res) => {
    const { a, b, operation } = req.query;

    if (isNaN(a) || isNaN(b)) {
      return res.status(400).send("Parameters must be numbers");
    }

    let result = 0;
    switch (operation) {
      case "add":
        result = parseInt(a) + parseInt(b);
        break;
      case "subtract":
        result = parseInt(a) - parseInt(b);
        break;
      case "multiply":
        result = parseInt(a) * parseInt(b);
        break;
      case "divide":
        if (parseInt(b) === 0) {
          result = "Division by 0 is not allowed";
          return;
        }
        result = parseInt(a) / parseInt(b);
        break;
      default:
        result = "Invalid operation";
    }
    res.send(result.toString());
  });

  app.get(
    "/lab5/:operation(add|subtract|multiply|divide)/:a/:b",
    (req, res) => {
      const { operation, a, b } = req.params;

      if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Parameters must be numbers");
      }

      let result;
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
          result = parseInt(a) * parseInt(b);
          break;
        case "divide":
          if (parseInt(b) === 0) {
            result = "Division by 0 is not allowed";
            return;
          }
          result = parseInt(a) / parseInt(b);
          break;
        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    }
  );
}
