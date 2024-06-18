# Copyright (c) 2024, abc and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Student(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		active: DF.Check
		blood_group: DF.Literal["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
		date_of_birth: DF.Date
		default_address: DF.Link | None
		email: DF.Data
		first_name: DF.Data
		full_name: DF.Data | None
		gender: DF.Literal["Male", "Female", "Other"]
		last_name: DF.Data
		middle_name: DF.Data | None
		naming_series: DF.Literal[".first_name.-.YYYY.-.MM .-.DD.-.####", ".first_name.-.MM.-.DD.-.YYYY.-.####", ".first_name.-.DD.-.YYYY .-.MM.-.####"]
		nationality: DF.Data
	# end: auto-generated types
	pass
