#!/usr/bin/env python3
"""Module that takes str and int or float to return tuple"""


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Takes str, int or float and returns tuple of str and float"""

    sq = v * v
    return (k, sq)
