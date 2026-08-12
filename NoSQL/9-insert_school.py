#!/usr/bin/env python3
"""Module that inserts a new document in collection based on kwards"""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in collection,
        returns new _id
    """

    add = mongo_collection.insertOne(**kwargs)
    return add.inserted_id
