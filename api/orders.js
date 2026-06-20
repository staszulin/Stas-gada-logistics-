let orders = [];

export default async function handler(req, res) {

  try {
    const body = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    if (req.method === "POST") {

      const order = {
        id: Date.now(),
        chain: body?.chain || "",
        branch: body?.branch || "",
        city: body?.city || "",
        status: "new",
        pallets: 0,
        createdAt: new Date().toISOString()
      };

      orders.push(order);

      return res.status(200).json(order);
    }

    if (req.method === "GET") {
      return res.status(200).json(orders);
    }

    return res.status(405).json({ error: "Method not allowed" });

  } catch (err) {
    return res.status(500).json({
      error: "Server error",
      details: err.message
    });
  }
}
