var products = [
    { product: 'Wijmo', platform: 'Web' },
    { product: 'ActiveReports', platform: 'Desktop' },
    { product: 'ActiveReportsJS', platform: 'Web' },
    { product: 'ComponentOne', platform: 'Desktop' },
    { product: 'Spread', platform: 'Desktop' },
    { product: 'SpreadJS', platform: 'Web' },
    { product: 'GCDocs', platform: 'Desktop' }
];

var agents = [
    { agent: 'Ashlyn Dunlop', region: 'East' },
    { agent: 'Keith Vang', region: 'East' },
    { agent: 'Bobbi Rodrigues', region: 'West' },
    { agent: 'Charli Medina', region: 'West' },
    { agent: 'Kaitlin Salt', region: 'West' },
];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getOrderList(count) {
    var year = new Date().getFullYear(), data = [];
    for(var i = 0; i < count; i++) {
      let productIdx = randomInt(0, 6);
      let agentIdx = randomInt(0, 4);
      data.push({
        orderId: randomInt(1, 10000),
        platform: products[productIdx].platform,
        product: products[productIdx].product,
        agent: agents[agentIdx].agent,
        region: agents[agentIdx].region,
        date: new Date(year - randomInt(0, 2), randomInt(0, 11), randomInt(0, 27)),
        sales: randomInt(10, 50),
        downloads: randomInt(10, 200),
        revenue: randomInt(500, 3500)
      });
    }
    return data;
}