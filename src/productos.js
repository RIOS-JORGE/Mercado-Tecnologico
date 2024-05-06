let productosTecnologicos = [
  {
    nombre: "Smartphone",
    n: 0,
    precio: 500,
    cantidad: 100,
    imagen:
      "https://images.unsplash.com/photo-1591447337751-c7b95cf704ba?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nombre: "Laptop",
    n: 0,
    precio: 1000,
    cantidad: 50,
    imagen:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nombre: "Tablet",
    n: 0,
    precio: 300,
    cantidad: 80,
    imagen:
      "https://images.unsplash.com/photo-1627372129933-9abc19b91f21?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nombre: "Auriculares",
    n: 0,
    precio: 50,
    cantidad: 120,
    imagen:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nombre: "Teclado",
    n: 0,
    precio: 30,
    cantidad: 150,
    imagen:
      "https://images.unsplash.com/photo-1560429506-b505b229870b?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nombre: "Mouse",
    n: 0,
    precio: 20,
    cantidad: 200,
    imagen:
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nombre: "Monitor",
    n: 0,
    precio: 200,
    cantidad: 60,
    imagen:
      "https://images.unsplash.com/photo-1601656269222-fda862e6dc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uaXRvciUyMHBjfGVufDB8fDB8fHww",
  },
  {
    nombre: "Impresora",
    n: 0,
    precio: 150,
    cantidad: 40,
    imagen:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1wcmVzb3JhJTIwJTIwbGFzZXJ8ZW58MHx8MHx8fDA%3D://source.unsplash.com/featured/?technology,printer",
  },
  {
    nombre: "Cámara",
    n: 0,
    precio: 400,
    cantidad: 30,
    imagen:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYXJhJTIwZGUlMjBmb3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    nombre: "Altavoces",
    n: 0,
    precio: 100,
    cantidad: 80,
    imagen:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWx0YXZvY2VzfGVufDB8fDB8fHww",
  },
  {
    nombre: "Reloj inteligente",
    n: 0,
    precio: 150,
    cantidad: 70,
    imagen:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVsb2olMjBpbnRlbGlnZW50ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    nombre: "Router",
    n: 0,
    precio: 80,
    cantidad: 90,
    imagen:
      "https://images.unsplash.com/photo-1606421753414-8d165c9d48e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    nombre: "Disco duro externo",
    n: 0,
    precio: 120,
    cantidad: 50,
    imagen:
      "https://images.unsplash.com/photo-1613070541337-b40942ee6527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY28lMjBkdXJvJTIwZXh0ZXJub3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    nombre: "Memoria USB",
    n: 0,
    precio: 10,
    cantidad: 300,
    imagen:
      "https://images.unsplash.com/photo-1682948163895-95eef28e96b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVtb3JpYSUyMHVzYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    nombre: "Tarjeta gráfica",
    n: 0,
    precio: 300,
    cantidad: 25,
    imagen:
      "https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFyamV0YSUyMGdyYWZpY2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    nombre: "Proyector",
    n: 0,
    precio: 400,
    cantidad: 20,
    imagen:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJveWVjdG9yfGVufDB8fDB8fHww",
  },
];
