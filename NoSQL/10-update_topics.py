#!/usr/bin/env python3
"""
    Module that changes all topics of
    school document based on name
"""


def update_topics(mongo_collection, name, topics):
    """Updates name and list of topics"""

    query_filter = {'name': name}
    update_operation = {'$set': {'topics': topics}}
    update = mongo_collection.update_many(query_filter, update_operation)
    return update
