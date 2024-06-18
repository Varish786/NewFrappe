# Copyright (c) 2024, abc and contributors
# For license information, please see license.txt

# sample.sample.doctype.test.test.print_firstname
import frappe
from frappe.model.document import Document


# class Test(Document):
#     pass

# ----------------------------------------------------------

class Test(Document):
    # begin: auto-generated types
    # This code is auto-generated. Do not modify anything in this block.

    from typing import TYPE_CHECKING

    if TYPE_CHECKING:
        from frappe.types import DF

        firstname: DF.Data | None
        fullname: DF.Data | None
        lastname: DF.Data | None
    # end: auto-generated types
    
    def before_save(self):

        if self.firstname and self.lastname:
            self.fullname = f"{self.firstname} {self.lastname}"
        else:
            self.fullname = self.firstname or self.lastname or ''

@frappe.whitelist()
def print_firstname(firstname):
    # frappe.msgprint("working")
    print(f"Received firstname: {firstname}")
    frappe.log_error(f"Received firstname: {firstname}", "Test Log")
    
# --------------------------------------------------------------------------

















