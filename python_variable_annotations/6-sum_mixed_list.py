#!/usr/bin/env python3
"""Module that takes a mixed list of
    int and float and return sum as float
"""


from typing import Union, Optional


def sum_mixed_list(mxd_lst: list[Union[int, float]]) -> float:
    """Returns sum of int and floats as float"""

    sum = 0
    for x in mxd_lst:
        sum += x
    return sum
