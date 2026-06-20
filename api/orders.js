let orders = [];

export default function handler(req, res) {

  if (req.method === "POST") {
    const order = {
      id: Date.now(),
      chain: req.body.chain,
      branch: req.body.branch,
      city: req.body.city,
      status: "new",
      pallets: 0,
      createdAt: new Date()
    };

    orders.push(order);
    return res.status(200).json(order);
  }

  if (req.method === "GET") {
    return res.status(200).json(orders);
  }

  res.status(405).json({ error: "Method not allowed" });
}
