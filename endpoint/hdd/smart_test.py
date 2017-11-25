import json

import commandSender
from endpoint.page_request.login_checker import LoginChecker


class SmartTest:
	def GET(self):
		"""
		Performs a smart test.

		Returns:
			A JSON object with the following variables::

				consoleFeedback (str): User feedback.

		Raises:
			web.InternalError
			web.Conflict
		"""
		if LoginChecker.loggedIn():
			data = {}

			try:
				data['consoleFeedback'] = commandSender.smartTest()
				outJSON = json.dumps(data)
			except IOError as e:
				raise web.InternalError(e.message)
			except OSError as e:
				raise web.InternalError(e.message)
			except AssertionError as e:
				raise web.Conflict(e.message)

			return outJSON