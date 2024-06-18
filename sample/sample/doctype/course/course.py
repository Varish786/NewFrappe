# Copyright (c) 2024, abc and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Course(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from sample.sample.doctype.topics.topics import Topics

		academic_year: DF.Link | None
		add_topics: DF.Table[Topics]
		course_code: DF.Data
		course_name: DF.Data
		credits: DF.Data
	# end: auto-generated types
	pass
