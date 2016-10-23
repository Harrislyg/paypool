var http = require('http');
var fs=require('fs');

var jsonReturn = [
    {
     "productName" : "Amazon Echo Dot (6-Pack)",
     "totalPrice" : "$349.93",
     "imageUrl": " https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjc1pyouPDPAhVKiFQKHQ9EA78QjRwIBw&url=http%3A%2F%2Fmoney.cnn.com%2F2016%2F04%2F04%2Ftechnology%2Famazon-echo-dot-review%2F&psig=AFQjCNHMwhXBOKzcBnl-YbOuv6Pl_Jyo8A&ust=1477295385229194",
     "buyer" : "John",
    },
];


// var p2p = require('mastercard-p2p');
// var MasterCardAPI = p2p.MasterCardAPI;

// var consumerKey = "Q03WdXSS9Lydb2b5ZzibgIgp7i47VEsRmwaEc0Dz83919df5!a6072134ed61446e965f4fde37ddae470000000000000000"
// var keyStorePath = "paypool_sandbox.p12"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
// var keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
// var keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key

// // You only need to do initialize MasterCardAPI once
// // For production use pass sandbox: false
// var authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
// MasterCardAPI.init({
//     sandbox: true,
//     authentication: authentication
// });

// // var requestData = {
// //   "payment_transfer": {
// //     "transfer_reference": "40013991848254111813006",
// //     "payment_type": "P2P",
// //     "funding_source": [
// //       "CREDIT",
// //       "DEBIT"
// //     ],
// //     "amount": "1800",
// //     "currency": "USD",
// //     "sender_account_uri": "pan:5013040000000018;exp\u003d2017-08;cvc\u003d123",
// //     "sender": {
// //       "first_name": "John",
// //       "middle_name": "Tyler",
// //       "last_name": "Jones",
// //       "nationality": "USA",
// //       "date_of_birth": "1994-05-21",
// //       "address": {
// //         "line1": "21 Broadway",
// //         "line2": "Apartment A-6",
// //         "city": "OFallon",
// //         "country_subdivision": "MO",
// //         "postal_code": "63368",
// //         "country": "USA"
// //       },
// //       "phone": "11234565555",
// //       "email": "John.Jones123@abcmail.com",
// //       "government_ids": {
// //         "government_id_uri": "ppn:123456789;expiration-date\u003d2019-05-27;issue-date\u003d2011-07-12;issuing-country\u003dUSA;issuing-place\u003dOFallon"
// //       }
// //     },
// //     "recipient_account_uri": "pan:5013040000000018;exp\u003d2017-08;cvc\u003d123",
// //     "recipient": {
// //       "first_name": "Jane",
// //       "middle_name": "Tyler",
// //       "last_name": "Smith",
// //       "nationality": "USA",
// //       "date_of_birth": "1999-12-30",
// //       "address": {
// //         "line1": "1 Main St",
// //         "line2": "Apartment 9",
// //         "city": "OFallon",
// //         "country_subdivision": "MO",
// //         "postal_code": "63368",
// //         "country": "USA"
// //       },
// //       "phone": "11234567890",
// //       "email": "John.Jones123@abcmail.com",
// //       "government_ids": {
// //         "government_id_uri": "ppn:123456789;expiration-date\u003d2019-05-27;issue-date\u003d2011-07-12;issuing-country\u003dUSA;issuing-place\u003dOFallon"
// //       }
// //     },
// //     "payment_origination_country": "USA",
// //     "sanction_screening_override": " false ",
// //     "reconciliation_data": {
// //       "custom_field": [
// //         {
// //           "name": "ABC",
// //           "value": "123"
// //         },
// //         {
// //           "name": "DEF",
// //           "value": "456"
// //         },
// //         {
// //           "name": "GHI",
// //           "value": "789"
// //         }
// //       ]
// //     },
// //     "statement_descriptor": "TST*THANKYOU",
// //     "channel": "KIOSK",
// //     "text": "funding_source"
// //   },
// //   "partnerId": "ptnr_BEeCrYJHh2BXTXPy_PEtp-8DBOo"
// // };

// // p2p.PaymentTransfer.create(requestData
// // , function (error, data) {
// //     if (error) {
// //         // console.error("An error occurred");
// //         // console.error(error);
// //     }
// //     else {
// //         console.log(data.transfer.id);     //Output-->trn_MQTGry0D_TGe8QTrWj4LtaydUUWM
// //         console.log(data.transfer.resource_type);     //Output-->transfer
// //         console.log(data.transfer.transfer_reference);     //Output-->40013991848254111813006
// //         console.log(data.transfer.payment_type);     //Output-->P2P
// //         console.log(data.transfer.sender_account_uri);     //Output-->pan:************0018
// //         console.log(data.transfer.sender.first_name);     //Output-->John
// //         console.log(data.transfer.sender.middle_name);     //Output-->Tyler
// //         console.log(data.transfer.sender.last_name);     //Output-->Jones
// //         console.log(data.transfer.sender.nationality);     //Output-->USA
// //         console.log(data.transfer.sender.date_of_birth);     //Output-->1994-05-21
// //         console.log(data.transfer.sender.address.line1);     //Output-->21 Broadway
// //         console.log(data.transfer.sender.address.line2);     //Output-->Apartment A-6
// //         console.log(data.transfer.sender.address.city);     //Output-->OFallon
// //         console.log(data.transfer.sender.address.country_subdivision);     //Output-->MO
// //         console.log(data.transfer.sender.address.postal_code);     //Output-->63368
// //         console.log(data.transfer.sender.address.country);     //Output-->USA
// //         console.log(data.transfer.sender.phone);     //Output-->11234565555
// //         console.log(data.transfer.sender.email);     //Output-->John.Jones123@abcmail.com
// //         console.log(data.transfer.recipient_account_uri);     //Output-->pan:************0018
// //         console.log(data.transfer.recipient.first_name);     //Output-->Jane
// //         console.log(data.transfer.recipient.middle_name);     //Output-->Tyler
// //         console.log(data.transfer.recipient.last_name);     //Output-->Smith
// //         console.log(data.transfer.recipient.nationality);     //Output-->USA
// //         console.log(data.transfer.recipient.date_of_birth);     //Output-->1999-12-30
// //         console.log(data.transfer.recipient.address.line1);     //Output-->1 Main St
// //         console.log(data.transfer.recipient.address.line2);     //Output-->Apartment 9
// //         console.log(data.transfer.recipient.address.city);     //Output-->OFallon
// //         console.log(data.transfer.recipient.address.country_subdivision);     //Output-->MO
// //         console.log(data.transfer.recipient.address.postal_code);     //Output-->63368
// //         console.log(data.transfer.recipient.address.country);     //Output-->USA
// //         console.log(data.transfer.recipient.phone);     //Output-->11234567890
// //         console.log(data.transfer.recipient.email);     //Output-->John.Jones123@abcmail.com
// //         console.log(data.transfer.transfer_amount.value);     //Output-->1800
// //         console.log(data.transfer.transfer_amount.currency);     //Output-->USD
// //         console.log(data.transfer.created);     //Output-->2016-08-29T01:07:37-05:00
// //         console.log(data.transfer.transaction_history.resource_type);     //Output-->list
// //         console.log(data.transfer.transaction_history.item_count);     //Output-->1
// //         console.log(data.transfer.transaction_history.data.transaction.id);     //Output-->txn_SVDvtQk1mKcJefExHKpvVeLctXvJ
// //         console.log(data.transfer.transaction_history.data.transaction.resource_type);     //Output-->transaction
// //         console.log(data.transfer.transaction_history.data.transaction.account_uri);     //Output-->pan:************0018
// //         console.log(data.transfer.transaction_history.data.transaction.transaction_amount.value);     //Output-->1800
// //         console.log(data.transfer.transaction_history.data.transaction.transaction_amount.currency);     //Output-->USD
// //         console.log(data.transfer.transaction_history.data.transaction.network);     //Output-->STAR
// //         console.log(data.transfer.transaction_history.data.transaction.funds_availability);     //Output-->IMMEDIATE
// //         console.log(data.transfer.transaction_history.data.transaction.type);     //Output-->PAYMENT
// //         console.log(data.transfer.transaction_history.data.transaction.create_timestamp);     //Output-->2016-08-29T01:07:37-05:00
// //         console.log(data.transfer.transaction_history.data.transaction.status);     //Output-->APPROVED
// //         console.log(data.transfer.transaction_history.data.transaction.status_reason);     //Output-->APPROVED
// //         console.log(data.transfer.transaction_history.data.transaction.status_timestamp);     //Output-->2016-08-29T01:07:37-05:00
// //         console.log(data.transfer.transaction_history.data.transaction.retrieval_reference);     //Output-->624200192616
// //         console.log(data.transfer.transaction_history.data.transaction.system_trace_audit_number);     //Output-->926162
// //         console.log(data.transfer.reconciliation_data.custom_field[0].name);     //Output-->ABC
// //         console.log(data.transfer.reconciliation_data.custom_field[0].value);     //Output-->123
// //         console.log(data.transfer.reconciliation_data.custom_field[1].name);     //Output-->DEF
// //         console.log(data.transfer.reconciliation_data.custom_field[1].value);     //Output-->456
// //         console.log(data.transfer.reconciliation_data.custom_field[2].name);     //Output-->GHI
// //         console.log(data.transfer.reconciliation_data.custom_field[2].value);     //Output-->789
// //         console.log(data.transfer.statement_descriptor);     //Output-->TST*THANKYOU
// //         console.log(data.transfer.channel);     //Output-->KIOSK
// //         console.log(data.transfer.status);     //Output-->APPROVED
// //         console.log(data.transfer.status_timestamp);     //Output-->2016-08-29T01:07:37-05:00

// //     }
// // });



// var requestData = {
//   "partnerId": "ptnr_BEeCrYJHh2BXTXPy_PEtp-8DBOo",
//   "consumer": {
//     "consumer_reference": "ref_747328506967915737",
//     "first_name": "Jane",
//     "middle_name": "Tyler",
//     "last_name": "Smith",
//     "nationality": "USA",
//     "date_of_birth": "1999-12-30",
//     "address": {
//       "line1": "1 Main Street",
//       "line2": "Apartment 9",
//       "city": "OFallon",
//       "country_subdivision": "MO",
//       "postal_code": "63368",
//       "country": "USA"
//     },
//     "primary_phone": "11234567890",
//     "primary_email": "Jane.Smith123@abcmail.com",
//     "account": {
//       "default_sending": "true",
//       "default_receiving": "true",
//       "account_reference": "ref_198022431729691454",
//       "label": "JaneMC",
//       "account_uri": "pan:5432123456789012;exp\u003d2017-02;cvc\u003d123",
//       "name_on_account": "Jane Tyler Smith",
//       "address": {
//         "line1": "1 Main St",
//         "line2": "Apartment 9",
//         "city": "OFallon",
//         "country_subdivision": "MO",
//         "postal_code": "63368",
//         "country": "USA"
//       }
//     }
//   }
// };

// p2p.Consumer.create(requestData
// , function (error, data) {
//     if (error) {
//         console.error("An error occurred");
//         console.error(error);
//     }
//     else {
//         console.log(data.consumer.id);     //Output-->cns_f21tg68mh89c376h
//         console.log(data.consumer.resource_type);     //Output-->consumer
//         console.log(data.consumer.consumer_reference);     //Output-->ref_747328506967915737
//         console.log(data.consumer.first_name);     //Output-->Jane
//         console.log(data.consumer.middle_name);     //Output-->Tyler
//         console.log(data.consumer.last_name);     //Output-->Smith
//         console.log(data.consumer.nationality);     //Output-->USA
//         console.log(data.consumer.date_of_birth);     //Output-->1999-12-30
//         console.log(data.consumer.address.line1);     //Output-->1 Main Street
//         console.log(data.consumer.address.line2);     //Output-->Apartment 9
//         console.log(data.consumer.address.city);     //Output-->OFallon
//         console.log(data.consumer.address.country_subdivision);     //Output-->MO
//         console.log(data.consumer.address.postal_code);     //Output-->63368
//         console.log(data.consumer.address.country);     //Output-->USA
//         console.log(data.consumer.primary_phone);     //Output-->11234567890
//         console.log(data.consumer.primary_email);     //Output-->Jane.Smith123@abcmail.com
//         console.log(data.consumer.preferences.default_accounts.sending);     //Output-->acct_mk32k324mg6wn19x
//         console.log(data.consumer.preferences.default_accounts.receiving);     //Output-->acct_mk32k324mg6wn19x

//     }
// });



// /*
// var p2p = require('mastercard-p2p');
// var MasterCardAPI = p2p.MasterCardAPI;

// var consumerKey = "Q03WdXSS9Lydb2b5ZzibgIgp7i47VEsRmwaEc0Dz83919df5!a6072134ed61446e965f4fde37ddae470000000000000000"
// var keyStorePath = "./paypool_sandbox.p12"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12
// var keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
// var keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key

// // You only need to do initialize MasterCardAPI once
// // For production use pass sandbox: false
// var authentication = new MasterCardAPI.OAuth(consumerKey, keyStorePath, keyAlias, keyPassword);
// MasterCardAPI.init({
//     sandbox: true,
//     authentication: authentication
// });

// var requestData = {
//   "payment_transfer": {
//     "transfer_reference": "40023991848254111813006",
//     "payment_type": "P2P",
//     "funding_source": [
//       "CREDIT",
//       "DEBIT"
//     ],
//     "amount": "1800",
//     "currency": "USD",
//     "sender_account_uri": "acct-ref:ref_20160407070850915",
//     "sender": {
//       "first_name": "John",
//       "middle_name": "Tyler",
//       "last_name": "Jones",
//       "nationality": "USA",
//       "date_of_birth": "1994-05-21",
//       "address": {
//         "line1": "21 Broadway",
//         "line2": "Apartment A-6",
//         "city": "OFallon",
//         "country_subdivision": "MO",
//         "postal_code": "63368",
//         "country": "USA"
//       },
//       "phone": "11234565555",
//       "email": "John.Jones123@abcmail.com"
//     },
//     "recipient_account_uri": "pan:5013040000000018;exp\u003d2017-08;cvc\u003d123",
//     "recipient": {
//       "first_name": "Jane",
//       "middle_name": "Tyler",
//       "last_name": "Smith",
//       "nationality": "USA",
//       "date_of_birth": "1999-12-30",
//       "address": {
//         "line1": "1 Main St",
//         "line2": "Apartment 9",
//         "city": "OFallon",
//         "country_subdivision": "MO",
//         "postal_code": "63368",
//         "country": "USA"
//       },
//       "phone": "11234567890",
//       "email": "Jane.Smith123@abcmail.com"
//     },
//     "payment_origination_country": "USA",
//     "sanction_screening_override": " false ",
//     "reconciliation_data": {
//       "custom_field": [
//         {
//           "name": "ABC",
//           "value": "123"
//         },
//         {
//           "name": "DEF",
//           "value": "456"
//         },
//         {
//           "name": "GHI",
//           "value": "789"
//         }
//       ]
//     },
//     "statement_descriptor": "TST*THANKYOU",
//     "channel": "KIOSK",
//     "text": "funding_source"
//   },
//   "partnerId": "ptnr_BEeCrYJHh2BXTXPy_PEtp-8DBOo"
// };*/
// // console.log(p2p);
// // console.log(p2p.PaymentTransfer);

// /*p2p.PaymentTransfer.create(requestData
// , function (error, data) {
//     if (error) {
//         console.error("An error occurred");
//         console.error(error);
//     }
//     else {
//         console.log(data.transfer.id);     //Output-->trn_4MMUC7147Vamd1IVt77DV0d-mIZr
//         console.log(data.transfer.resource_type);     //Output-->transfer
//         console.log(data.transfer.transfer_reference);     //Output-->40023991848254111813006
//         console.log(data.transfer.payment_type);     //Output-->P2P
//         console.log(data.transfer.sender_account_uri);     //Output-->acct-ref:ref_20160407070850915
//         console.log(data.transfer.sender.first_name);     //Output-->John
//         console.log(data.transfer.sender.middle_name);     //Output-->Tyler
//         console.log(data.transfer.sender.last_name);     //Output-->Jones
//         console.log(data.transfer.sender.nationality);     //Output-->USA
//         console.log(data.transfer.sender.date_of_birth);     //Output-->1994-05-21
//         console.log(data.transfer.sender.address.line1);     //Output-->21 Broadway
//         console.log(data.transfer.sender.address.line2);     //Output-->Apartment A-6
//         console.log(data.transfer.sender.address.city);     //Output-->OFallon
//         console.log(data.transfer.sender.address.country_subdivision);     //Output-->MO
//         console.log(data.transfer.sender.address.postal_code);     //Output-->63368
//         console.log(data.transfer.sender.address.country);     //Output-->USA
//         console.log(data.transfer.sender.phone);     //Output-->11234565555
//         console.log(data.transfer.sender.email);     //Output-->John.Jones123@abcmail.com
//         console.log(data.transfer.recipient_account_uri);     //Output-->pan:************0018
//         console.log(data.transfer.recipient.first_name);     //Output-->Jane
//         console.log(data.transfer.recipient.middle_name);     //Output-->Tyler
//         console.log(data.transfer.recipient.last_name);     //Output-->Smith
//         console.log(data.transfer.recipient.nationality);     //Output-->USA
//         console.log(data.transfer.recipient.date_of_birth);     //Output-->1999-12-30
//         console.log(data.transfer.recipient.address.line1);     //Output-->1 Main St
//         console.log(data.transfer.recipient.address.line2);     //Output-->Apartment 9
//         console.log(data.transfer.recipient.address.city);     //Output-->OFallon
//         console.log(data.transfer.recipient.address.country_subdivision);     //Output-->MO
//         console.log(data.transfer.recipient.address.postal_code);     //Output-->63368
//         console.log(data.transfer.recipient.address.country);     //Output-->USA
//         console.log(data.transfer.recipient.phone);     //Output-->11234567890
//         console.log(data.transfer.recipient.email);     //Output-->Jane.Smith123@abcmail.com
//         console.log(data.transfer.transfer_amount.value);     //Output-->1800
//         console.log(data.transfer.transfer_amount.currency);     //Output-->USD
//         console.log(data.transfer.created);     //Output-->2016-08-29T01:11:02-05:00
//         console.log(data.transfer.transaction_history.resource_type);     //Output-->list
//         console.log(data.transfer.transaction_history.item_count);     //Output-->1
//         console.log(data.transfer.transaction_history.data.transaction.id);     //Output-->txn_S7hjCOKzzkSzeCTS7g-Fdq0_drCD
//         console.log(data.transfer.transaction_history.data.transaction.resource_type);     //Output-->transaction
//         console.log(data.transfer.transaction_history.data.transaction.account_uri);     //Output-->pan:************0018
//         console.log(data.transfer.transaction_history.data.transaction.transaction_amount.value);     //Output-->1800
//         console.log(data.transfer.transaction_history.data.transaction.transaction_amount.currency);     //Output-->USD
//         console.log(data.transfer.transaction_history.data.transaction.network);     //Output-->STAR
//         console.log(data.transfer.transaction_history.data.transaction.funds_availability);     //Output-->IMMEDIATE
//         console.log(data.transfer.transaction_history.data.transaction.type);     //Output-->PAYMENT
//         console.log(data.transfer.transaction_history.data.transaction.create_timestamp);     //Output-->2016-08-29T01:11:02-05:00
//         console.log(data.transfer.transaction_history.data.transaction.status);     //Output-->APPROVED
//         console.log(data.transfer.transaction_history.data.transaction.status_reason);     //Output-->APPROVED
//         console.log(data.transfer.transaction_history.data.transaction.status_timestamp);     //Output-->2016-08-29T01:11:02-05:00
//         console.log(data.transfer.transaction_history.data.transaction.retrieval_reference);     //Output-->624200192616
//         console.log(data.transfer.transaction_history.data.transaction.system_trace_audit_number);     //Output-->926162
//         console.log(data.transfer.reconciliation_data.custom_field[0].name);     //Output-->ABC
//         console.log(data.transfer.reconciliation_data.custom_field[0].value);     //Output-->123
//         console.log(data.transfer.reconciliation_data.custom_field[1].name);     //Output-->DEF
//         console.log(data.transfer.reconciliation_data.custom_field[1].value);     //Output-->456
//         console.log(data.transfer.reconciliation_data.custom_field[2].name);     //Output-->GHI
//         console.log(data.transfer.reconciliation_data.custom_field[2].value);     //Output-->789
//         console.log(data.transfer.statement_descriptor);     //Output-->TST*THANKYOU
//         console.log(data.transfer.channel);     //Output-->KIOSK
//         console.log(data.transfer.status);     //Output-->APPROVED
//         console.log(data.transfer.status_timestamp);     //Output-->2016-08-29T01:11:02-05:00

//     }
// });*/



http.createServer(function (req, res) {
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(jsonReturn));
  }, 2000);
}).listen(8000);

http.createServer(function (req, res) {
  setTimeout(function () {
    fs.readFile("index.html" ,function(error,data){
       if(error){
           console.log("bo");
           res.writeHead(404,{"Content-type":"text/plain"});
           res.end("Sorry the page was not found");
       }else{
            console.log("bo");
           res.writeHead(200,{"Content-type":"text/html"});
           res.write(data);
       }
   });
  }, 200);
}).listen(3000,"0.0.0.0");

console.log('Server running at http://127.0.0.1:8000/');
