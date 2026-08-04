#!/usr/bin/env python3
"""Module that takes a float and returns
    a function that multiplies float by float
"""


import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Returns multiplied value"""

    def fun(value: float) -> float:
        """Takes float and returns float multiplied by float"""

        return value * multiplier

    return fun
