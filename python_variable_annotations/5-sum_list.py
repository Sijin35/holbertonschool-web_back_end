#!/usr/bin/env python3
"""Module that takes a list and returns the sum as float"""


from typing import List


def sum_list(input_list: List[float]) -> float:
    """Takes a list of float and returns their sum as float"""

    sum = 0
    for x in input_list:
        sum += x
    return sum
