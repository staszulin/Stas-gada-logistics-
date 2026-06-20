let orders = [];

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  try {
    const body = req.body && typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body || {};

    if (req.method === "GET") {
      return res.status(200).json({
        ok: true,
        orders
      });
    }

    if (req.method === "POST") {
      const order = {
        id: Date.now(),
        chain: body.chain || "לא הוזן",
        branch: body.branch || "לא הוזן",
        city: body.city || "לא הוזן",
        status: "new",
        pallets: 0,
        createdAt: new Date().toISOString()
      };

      orders.push(order);

      return res.status(200).json({
        ok: true,
        order
      });
    }

    return res.status(405).json({
      ok: false,
      error: "Method not allowed"
    });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
