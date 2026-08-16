#!/usr/bin/env python3
"""Module returns list of school having specific topics"""


def schools_by_topic(mongo_collection, topic):
    """Returns the list of school having specific topic"""

    result = mongo_collection.find({'topics': topic})
    return result
