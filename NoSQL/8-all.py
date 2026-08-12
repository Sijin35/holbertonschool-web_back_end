#!/usr/bin/env python3
"""Module that lists all documents in collection"""


def list_all(mongo_collection):
    """Returns a list of all documents in collection,
    empty list if no documents are found
    """

    return list(mongo_collection.find())