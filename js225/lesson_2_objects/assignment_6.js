let invoices = {
  unpaid: [],
  paid: [],
};

invoices.add = function(name, amount) {
  this.unpaid.push({name, amount});
};

invoices.totalDue = function() {
  return this.unpaid.reduce((sum, invoice,) => {
    return sum + invoice.amount; 
  }, 0);
};

invoices.payInvoice = function(name) {
  let newUnpaid = [];
  this.unpaid.forEach(invoice => {
    if (invoice.name === name) {
      this.paid.push(invoice);
    } else {
      newUnpaid.push(invoice);
    }
  });

  this.unpaid = newUnpaid;
};

invoices.totalPaid = function() {
  return this.paid.reduce((sum, invoice,) => {
    return sum + invoice.amount; 
  }, 0);
};

invoices.add('Due north Development', 250);
invoices.add('Moonbeam Interactive', 187.5);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due north Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());
