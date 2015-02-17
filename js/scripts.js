var shipment = {
  weight: 0,
  distance: 0,

  rate: function() {
    rate = this.weight * this.distance;
    return rate;
  }
}
