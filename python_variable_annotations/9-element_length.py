#!/usr/bin/env python3
"""Module that annotates the function and returns values with apt types"""


from collections.abc import Iterable


def element_length(lst):
    """Returns values with apt types"""

    return [(i, len(i)) for i in lst]