#!/usr/bin/env python3
"""Module that annotates the function and returns values with apt types"""


import typing


def element_length(lst: typing.Iterable[typing.Sequence]) -> typing.List[
 typing.Tuple[typing.Sequence, int]]:
    """Returns values with apt types"""

    return [(i, len(i)) for i in lst]
