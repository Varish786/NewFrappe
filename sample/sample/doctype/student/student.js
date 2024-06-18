// Copyright (c) 2024, abc and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Student", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('Student', {
    // Function to set the full name
    first_name: function (frm) {
        set_full_name(frm);
    },
    middle_name: function (frm) {
        set_full_name(frm);
    },
    last_name: function (frm) {
        set_full_name(frm);
    },
    default_address: function (frm) {
        fetch_combined_address(frm);
    },
    refresh: function (frm) {
        // Set the joining date to today if it's not set
        if (!frm.doc.joining_date) {
            frm.set_value('joining_date', frappe.datetime.nowdate());
        }

        // Add a custom button
        frm.add_custom_button(__('Create User'), function () {
            frm.trigger('create_user');
        });
        fetch_combined_address(frm);
    },
    create_user: function (frm) {
        if (!frm.doc.email) {
            frappe.msgprint(__('Please enter a valid email address'));
            return;
        }

        frappe.call({
            method: "frappe.client.insert",
            args: {
                doc: {
                    doctype: "Student",
                    email: frm.doc.email, // Ensure you're using the correct fieldname for email
                    first_name: frm.doc.first_name,
                    last_name: frm.doc.last_name,
                    roles: [{
                        role: "Student"
                    }]
                }
            },
            callback: function (r) {
                if (r.exc) {
                    frappe.msgprint(__('There was an error creating the user'));
                } else {
                    frappe.msgprint(__('User created successfully'));
                }
            }
        });
    },
    validate: function (frm) {
        if (new Date(frm.doc.date_of_birth) > new Date()) {
            frappe.msgprint(__('Date of Birth cannot be in the future'));
            frappe.validated = false;
        }
    },

    before_save: function (frm) {
        let date = frappe.datetime.str_to_user(frm.doc.joining_date).split('-');
        if (frm.doc.naming_series === "STU-YYYY-MM-DD-0001") {
            console.log("nameSeries Choose", frm.doc.naming_series, "set :-STU-YYYY-MM-DD-0001",);
            frm.set_value('name', `${frm.doc.first_name}-${date[2]}${date[1]}${date[0]}-{####}`);
        } else if (frm.doc.naming_series === "STU-DD-MM-YYYY-0001") {
            console.log("nameSeries Choose", frm.doc.naming_series, "set :-STU-DD-MM-YYYY-0001",);
        } else if (frm.doc.naming_series === "STU-MM-YYYY-DD-0001") {
            console.log("nameSeries Choose", frm.doc.naming_series, "set :-STU-MM-YYYY-DD-0001",);
        }

        // ['19', '06', '2024']


        // if (!frm.doc.name) {
        //     let date = frappe.datetime.str_to_user(frm.doc.joining_date).split('-');
        //     let series = frm.doc.series || '0001';

        // }
    }
});

function set_full_name(frm) {
    let full_name = [frm.doc.first_name, frm.doc.middle_name, frm.doc.last_name]
        .filter(Boolean)
        .join(' ');
    frm.set_value('full_name', full_name);

}

function fetch_combined_address(frm) {
    // console.log("working");
    if (frm.doc.default_address) {
        frappe.call({
            method: "frappe.client.get",
            args: {
                doctype: "Address",
                name: frm.doc.default_address
            },
            callback: function (r) {
                if (r.message) {
                    let address = r.message;
                    let combined_address = `${address.address_line1 || ''}<br>
                                            ${address.address_line2 || ''}<br>
                                            ${address.city || ''}, ${address.state || ''}<br>
                                            ${address.country || ''}<br>
                                            ${address.pincode || ''}`;
                    frm.set_df_property('combined_address', 'options', combined_address);
                }
            }
        });
    }
}




// STU-YYYY-MM-DD-0001
// STU-DD-MM-YYYY-0001
// STU-MM-YYYY-DD-0001
