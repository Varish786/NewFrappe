// Copyright (c) 2024, abc and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Test", {
// 	refresh(frm) {
      
// 	},
// });

// ------------------------------------------------------------------------
// frappe.ui.form.on("Test", {
//     // firstname: function(frm) {
//     //     frm.trigger('set_fullname');
//     // },
//     // lastname: function(frm) {
//     //     frm.trigger('set_fullname');
//     // },
//     set_fullname: function(frm) {
//         if (frm.doc.firstname && frm.doc.lastname) {
//             frm.set_value('fullname', `${frm.doc.firstname} ${frm.doc.lastname}`);
//         } else {
//             frm.set_value('fullname', frm.doc.firstname || frm.doc.lastname || '');
//         }

//         console.log("Full name:", frm.doc.fullname);
//     }
// });
//--------------------------------------------------------------------------------


frappe.ui.form.on("Test", {

    
    firstname: function(frm) {
      
        frm.trigger('set_fullname');

        frappe.call({
            method: 'sample.sample.doctype.test.test.print_firstname',
            args: {
                firstname: frm.doc.firstname
            },
            callback: function(response) {
                if (response.message) {
                    console.log("Server response:", response.message);
                }
            }
        });
    },


    lastname: function(frm) {
        frm.trigger('set_fullname');
    },


    set_fullname: function(frm) {
        if (frm.doc.firstname && frm.doc.lastname) {
            frm.set_value('fullname', `${frm.doc.firstname} ${frm.doc.lastname}`);
        } else {
            frm.set_value('fullname', frm.doc.firstname || frm.doc.lastname || '');
        }
    }


});



// frappe.ui.form.on("Test", {
//     refresh: function(frm) {
//         frm.add_custom_button(__('Update Name'), function() {
//             frm.trigger('Updatename');
//         });
//     },
//     Updatename: function(frm) {
//         if(frm.doc.firstname) {
//             console.log("name", frm.doc.firstname);
//         }
//     }
// });