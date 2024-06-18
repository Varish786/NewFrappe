// Copyright (c) 2024, abc and contributors
// For license information, please see license.txt

frappe.ui.form.on("Program", {

    validate: function (frm) {
        let total_credit = 0;
        arrDatas = frm.doc["courses"];
        for (data of arrDatas) {
            total_credit += parseFloat(data['credit']);
        }
        frm.doc.total_credits = total_credit;
    }


});
