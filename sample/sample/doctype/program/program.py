# Copyright (c) 2024, abc and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Program(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from sample.sample.doctype.course_link.course_link import CourseLink
		from sample.sample.doctype.program_link.program_link import ProgramLink

		courses: DF.Table[CourseLink]
		description: DF.Text | None
		duration: DF.Float
		end_date: DF.Date | None
		instructor: DF.TableMultiSelect[ProgramLink]
		program_name: DF.Data | None
		start_date: DF.Date | None
		status: DF.Literal["Planned", "Ongoing", "Completed"]
		total_credits: DF.Float
	# end: auto-generated types
	pass
